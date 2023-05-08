'use client';

import { useEffect, useState } from 'react';

import Link from '@/components/shared/link';

import Route from '@/lib/route';

import GitHubIcon from '@/svgs/github.inline.svg';

const GithubStarCounter = () => {
  const [starsCount, setStarsCount] = useState(null);

  useEffect(() => {
    const prevStarsCount = window.sessionStorage.getItem('bytebase_github_stargazers_count');

    if (prevStarsCount) {
      setStarsCount(prevStarsCount);

      return;
    }

    async function getStarCount() {
      const updatedStarsCount = await fetch('https://api.github.com/repos/bytebase/bytebase')
        .then((res) => res.json())
        .then((json) => json.stargazers_count);

      window.sessionStorage.setItem('bytebase_github_stargazers_count', updatedStarsCount);

      setStarsCount(updatedStarsCount);
    }

    getStarCount();
  }, []);

  if (!starsCount) {
    return null;
  }

  return (
    <Link
      href={Route.GITHUB}
      className="inline-flex items-center gap-2 text-14 font-bold uppercase leading-none"
    >
      <GitHubIcon width={22} height={22} />
      {(starsCount / 1000).toFixed(1)}k
    </Link>
  );
};

export default GithubStarCounter;
