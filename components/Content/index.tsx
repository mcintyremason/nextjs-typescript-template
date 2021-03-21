import styles from "./index.module.css";
import classNames from "classnames";

import ContentCard from "../ContentCard";
import { Grid } from "@material-ui/core";
import React from "react";

type ContentProps = {};

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles["main-container"])}>
    <Grid
      container
      direction="column"
      className={classNames(styles["main"], "height-full")}
    >
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="space-evenly"
        alignContent="center"
        className={classNames(
          styles["content-cards-container"],
          styles["cards-left"],
        )}
      >
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="space-evenly"
        alignContent="center"
        className={classNames(
          styles["content-cards-container"],
          styles["cards-right"],
        )}
      >
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid>
    </Grid>
  </Grid>
);

export default Content;
