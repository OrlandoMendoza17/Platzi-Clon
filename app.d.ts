type TailwindFonts = ResolvableTo<KeyValuePair<string, string | [fontSize: string, lineHeight: string] | [fontSize: string, configuration: Partial<{
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string | number;
}>]>> | undefined