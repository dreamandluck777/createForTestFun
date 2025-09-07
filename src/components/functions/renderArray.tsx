import React from "react";

export function renderArr<T extends {id: number}> (
  someArr: T[],
  Element: React.ElementType | null,
  func: (item: T, index?: number) => React.ReactNode
) {
  return someArr.map((item, index) => {  
    const content = func(item, index); 

    if (Element) {
      return <Element key={item.id}>{content}</Element>;
    }

    return <React.Fragment key={item.id}>{content}</React.Fragment>;
  });
}