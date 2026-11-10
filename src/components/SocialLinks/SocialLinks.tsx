import { socialLinks } from "../../data/socials";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "social-media" }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
          <img src={s.icon} alt="" />
        </a>
      ))}
    </div>
  );
}
