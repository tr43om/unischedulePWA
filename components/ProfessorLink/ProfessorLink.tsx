"use client";

import { useSearchStore } from "@/zustandStore";

import Link from "next/link";

type ProfessorLinkProps = {
  id: number;
  name: string;
};

const ProfessorLink = ({ id, name }: ProfessorLinkProps) => {
  const { addToRecents } = useSearchStore((state) => state);
  return (
    <Link
      href={`professors/${id}`}
      className=" btn-link btn-xs btn text-sm normal-case"
      onClick={() => addToRecents({ id, name }, "professor")}
    >
      {name}
    </Link>
  );
};

export default ProfessorLink;
