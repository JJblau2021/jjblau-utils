import { useEffect } from "react";
/**
 * 打印日志 hook, 每当值变化时打印
 * @param name 名称
 * @param value 值
 */
export default function useLog<T>(name: string, value: T) {
  useEffect(() => {
    console.log(`> %c${name}`, "color: #218eff", " - ", value);
  }, [value]);
}
