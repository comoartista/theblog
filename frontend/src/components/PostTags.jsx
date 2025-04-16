import React from "react";

export function PostTags({ tags }) {
  const colorTags = {
    design: "#6941C6",
    research: "#3538CD",
    presentation: "#C11574",
    interface: "#C11574",
    leadership: "#6941C6",
    "software development": "#027A48",
    management: "#363F72",
    product: "#026AA2",
    frameworks: "#C4320A",
    tools: "#C11574",
    saas: "#C01048",
    "customer success": "#363F72",
  };

  return (
    <>
      {tags?.map((tag) => {
        const tagName = tag.name.toLowerCase().trim();
        const color = colorTags[tagName];
        const bgColor = color ? `${color}1A` : "#F0F9FF";
        const textColor = color || "#026AA2";

        return (
          <span
            key={tag.id}
            className="c-button--tag "
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}>
            {tag.name}
          </span>
        );
      })}
    </>
  );
}
