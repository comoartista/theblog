export function PostTags({ tags }) {
  const tagStyles = {
    design: { bg: "#F4EBFF", text: "#6941C6" },
    research: { bg: "#EEF4FF", text: "#3538CD" },
    presentation: { bg: "#FDF2FA", text: "#C11574" },
    interface: { bg: "#FDF2FA", text: "#C11574" },
    leadership: { bg: "#F4EBFF", text: "#6941C6" },
    "software development": { bg: "#ECFDF3", text: "#027A48" },
    management: { bg: "#F8F9FC", text: "#363F72" },
    product: { bg: "#F0F9FF", text: "#026AA2" },
    frameworks: { bg: "#FFF6ED", text: "#C4320A" },
    tools: { bg: "#FDF2FA", text: "#C11574" },
    saas: { bg: "#FFF1F3", text: "#C01048" },
    "customer success": { bg: "#F8F9FC", text: "#363F72" },
  };

  return (
    <>
      {tags?.map((tag) => {
        const tagName = tag.name.toLowerCase().trim();
        const style = tagStyles[tagName] || { bg: "#F0F9FF", text: "#026AA2" };

        return (
          <span
            key={tag.id}
            className="c-button--tag"
            style={{
              backgroundColor: style.bg,
              color: style.text,
            }}>
            {tag.name}
          </span>
        );
      })}
    </>
  );
}
