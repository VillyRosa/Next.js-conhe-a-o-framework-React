import Comment from "../Comment";
import { ModalReply } from "../ModalReply";
import { Replies } from "../Replies";

import styles from './commentlist.module.css';

export default function CommentList({ comments }) {
  return (
    <section className={styles.comments}>
      <h2>
        Comentários
      </h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment key={comment.id} comment={comment} />
            <ModalReply comment={comment}/>
            <Replies comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
}