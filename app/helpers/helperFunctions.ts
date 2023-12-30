export const truncateName = (name: string, maxLength: number) => {
  if (name?.length > maxLength) {
    return name?.substring(0, maxLength) + "...";
  }
  return name;
};

export function formatId(id: any) {
  if (typeof id !== "string") {
    id = id.toString();
  }

  if (id.length <= 6) {
    return id;
  }

  const firstPart = id.substring(0, 4);

  const lastPart = id.substring(id.length - 2);

  return `${firstPart}...${lastPart}`;
}
