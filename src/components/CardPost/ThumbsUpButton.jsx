'use client'

import IconButton from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import Spinner from "../Spinner";

import { useFormStatus } from "react-dom";

export default function ThumbsUpButton() {
  const { pending } = useFormStatus();
  return (
    <IconButton disabled={pending}>
      { pending ? <Spinner /> : <ThumbsUp /> }
    </IconButton>
  );
}