import { ChangeEvent } from "react";

export interface SearchProp {
  search: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
