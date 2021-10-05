import React, { FunctionComponent } from "react";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

export type LinkProps = Pick<MuiLinkProps, "children" | "href">;

/**
 * Kareo wrapped component of the Material-ui Link. The prop API has been limited to props defined in LinkProps
 *
 * Material-UI Link: [Docs](https://material-ui.com/components/links/), [API](https://material-ui.com/api/link/)
 *
 * @storybook: [Link](http://design.kareoprod.ent/design-system/?path=/story/components-data-display--link)
 */
const Link: FunctionComponent<LinkProps> = (props: LinkProps) => {
  return <MuiLink {...props} />;
};

Link.displayName = "KareoLink";
export default Link;
