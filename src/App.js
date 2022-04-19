import * as React from "react";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import schema from "data/schema";
import * as S from "selectors/schema";

import Template from "./Template";

export default function App() {
  const setSchema = useSetRecoilState(S.schemaState);

  useEffect(() => {
    setSchema(schema);
  }, []);
  
  return (
    <div className="flex flex-wrap p-0 md:p-5 bg-gray-50 dark:bg-gray-800 relative w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Template />
    </div>
  );
}