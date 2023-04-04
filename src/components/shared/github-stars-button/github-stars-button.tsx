import GitHubIcon from '@/svgs/github.inline.svg';

import Button from '@/components/shared/button';

//TODO: add github stars fetching

// TODO: add proper styles

const GithubStarsButton = () => (
  <Button
    additionalClassName="group max-w-[120px]"
    to="https://github.com/bytebase/bytebase"
    target="_blank"
    rel="noopener noreferrer"
  >
    <GitHubIcon className="mr-2 h-[26px] w-[26px]" />
    <span>Star</span>
    <span
      className="flex items-center before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5"
      aria-label="5200 stars on Github"
    >
      5,221
    </span>
  </Button>
);

export default GithubStarsButton;
