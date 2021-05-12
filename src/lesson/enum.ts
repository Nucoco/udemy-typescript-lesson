//enum
export enum OS {
   Windows,
   Mac,
   Linux
 }
 interface PC {
   id: number
   OSType: OS
 }
 const pc1: PC = {
   id: 1,
   OSType: OS.Windows
 }
 const pc2: PC = {
   id: 2,
   OSType: OS.Mac
 }