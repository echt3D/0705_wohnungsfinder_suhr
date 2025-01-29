export interface Text {
  [key: string]: string | Text;
}

export interface TextProps {
  t: Text;
}
