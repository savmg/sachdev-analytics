import { Card, Flex, Group, Text } from "@mantine/core";
import styles from "../assets/styles/TheGrid.module.css";
import PieGraph from "./dashboard/PieGraph";
import HorizontalBarGraph from "./dashboard/HorizontalBarGraph";
import LineGraph from "./dashboard/LineGraph";
import { IconArrowUpRight, IconUserBolt } from "@tabler/icons-react";

function Demo() {
  return (
    <div className={styles.container1}>
      {Array.from({ length: 486 }, (el) => el).map((_, index) => (
        <div
          key={index}
          style={{
            background: "green",
            width: "9px",
            height: "9px",
            margin: "1px",
            borderRadius:'1px'
          }}
        ></div>
      ))}
    </div>
  );
}

function TheGrid() {
  return (
    <div className={styles.container}>
      <Card
        withBorder
        className={`${styles.card} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <PieGraph />
      </Card>
      <Card
        withBorder
        className={`${styles.card} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <HorizontalBarGraph />
      </Card>

      <Card withBorder className={`${styles.card} ${styles.statCard}`}>
        <Flex mih={50} justify="flex-start" direction="column" wrap="nowrap">
          <Group justify="space-between">
            <Text size="xs" c="dimmed">
              Revenue{" "}
            </Text>
            <IconUserBolt size="1rem" stroke={1.5} />
          </Group>

          <Flex direction={"column"} mt={22}>
            <Group align="flex-end" gap="xs">
              <Text fz={"xl"} fw={600}>
                13,383
              </Text>
              <Text c="teal" fz="sm" fw={500}>
                <span>83%</span>
                <IconArrowUpRight size="1rem" stroke={1.5} />
              </Text>
            </Group>{" "}
            <Text fz="xs" c="dimmed" mt={0}>
              Compared to previous month
            </Text>
          </Flex>
        </Flex>{" "}
      </Card>

      <Card withBorder className={`${styles.card} ${styles.statCard}`}>
        <Flex mih={50} justify="flex-start" direction="column" wrap="nowrap">
          <Group justify="space-between">
            <Text size="xs" c="dimmed">
              Revenue{" "}
            </Text>
            <IconUserBolt size="1rem" stroke={1.5} />
          </Group>

          <Flex direction={"column"} mt={22}>
            <Group align="flex-end" gap="xs">
              <Text fz={"xl"} fw={600}>
                13,383
              </Text>
              <Text c="teal" fz="sm" fw={500}>
                <span>83%</span>
                <IconArrowUpRight size="1rem" stroke={1.5} />
              </Text>
            </Group>{" "}
            <Text fz="xs" c="dimmed" mt={0}>
              Compared to previous month
            </Text>
          </Flex>
        </Flex>{" "}
      </Card>

      <Card
        withBorder
        className={`${styles.card} ${styles.gridColumnSpan2} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <LineGraph />
      </Card>
      <Card withBorder className={`${styles.card} ${styles.gridRowSpan2}`}>
        <Demo />
      </Card>
    </div>
  );
}

export default TheGrid;