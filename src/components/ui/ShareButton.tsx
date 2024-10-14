import {
  FaXTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaReddit,
  FaFacebook,
} from "react-icons/fa6";

type ShareButtonProps = {
  url: string;
  title: string;
};

export const ShareButton = ({ url, title }: ShareButtonProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-3 items-center">
      <p>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Twitter"
        >
          <FaXTwitter />
        </a>
      </p>
      <p>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin />
        </a>
      </p>
      <p>
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </p>
      <p>
        <a
          href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Reddit"
        >
          <FaReddit />
        </a>
      </p>
      <p>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Share on Facebook"
        >
          <FaFacebook />
        </a>
      </p>
    </div>
  );
};
