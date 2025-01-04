import * as React from 'react';
import { SocialSignInButtonProps } from './types';

export const SocialSignInButton: React.FC<SocialSignInButtonProps> = ({ icon, provider, alt }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 justify-center px-5 py-1 rounded-xl border border-solid border-zinc-300">
      <div className="flex gap-2.5 items-center">
        <img
          loading="lazy"
          src={icon}
          alt={alt}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">Sign in with {provider}</div>
      </div>
    </div>
  );
}