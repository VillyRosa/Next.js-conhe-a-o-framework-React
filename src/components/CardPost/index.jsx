import Image from 'next/image';
import styles from './cardpost.module.css';
import Avatar from '../Avatar';
import Link from 'next/link';
import { incrementThumbsUp, postComment } from '@/actions';
import ThumbsUpButton from './ThumbsUpButton';
import { ModalComment } from '../ModalComment';

export default function Aside({ post, highlight }) {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            alt={`Capa do post de título: ${post.title}`}
            width={438}
            height={133}
            priority
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {!highlight && (
          <Link className={styles.link} href={`/posts/${post.slug}`}>Ver detalhes</Link>
        )}
      </section>
      <footer className={styles.footer}>
        <div className={styles.actions}>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>
              {post.likes}
            </p>
          </form>
          <div>
            <ModalComment action={submitComment} />
            <p>
              {post.comments.length}
            </p>
          </div>
        </div>
        <Avatar
          imageSrc={post.author.avatar}
          name={post.author.username}
        />
      </footer>
    </article>
  );
}