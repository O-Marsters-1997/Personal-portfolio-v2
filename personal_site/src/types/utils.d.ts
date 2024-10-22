type Viewport = "mobile" | "small-tablet" | "tablet" | "desktop";

type TailwindColors =
  | ResolvableTo<RecursiveKeyValuePair<string, string>>
  | undefined;
