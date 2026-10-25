// string
// boolean
// number
// [] | array
// object | {}

import type { ChangeEventHandler } from "react";

// interface IExample7 {
//   name: string;
//   age: number;
// }

// type TExample7 = {
//   name: string;
//   age: number;
// }

// type TExample10 = number | string

// let example: string = "jhon doe";
// let example2: boolean = false;
// let example3: number = 123;
// let example4: string[] = ["asd"]
// let example5: [string, number] = ["asd", 123]
// let example6: Object = {
//   name: "jhon",
//   age: 12
// }
// let example7: {
//   name: string;
//   age: number;
// } = {
//   name: "jhon",
//   age: 123,
// }
// let example8: IExample7 = {
//   name: "jhon",
//   age: 12,
// }
// let example9: TExample7 = {
//   name: "jhon",
//   age: 12,
// }
// let example10: TExample10 = 123;

// function example11 (param1:string, param2:number, param3: boolean):string {
//   return ""
// }
// function example12 (param1:string, param2:number, param3: boolean):void {
// }

export interface IInputTextProps  {
  id: string; 
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  placeholder: string;
}

export default function InputText(props:IInputTextProps) {
  return (
    <input
      className="input-text"
      id={props.id}
      type="text"
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
