import Image from "next/image";

export default function Comment({ comment }) {
  return (
    <div>
      <Image 
        src={comment.author.avatar} 
        alt={`Avatar do(a) ${comment.author.name}`}
        width={32} 
        height={32} 
      />
      <strong>
        @{comment.author.name}
      </strong>
      <p>
        {comment.text}
      </p>
    </div>
  );
}