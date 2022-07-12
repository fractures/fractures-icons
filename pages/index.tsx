import React, { Suspense, lazy, useState } from "react";
import {
  Flex,
  Text,
  Separator,
  Input,
  Pill,
  Container,
  Heading,
  Icon,
} from "@fractures/ui";
import { meta } from "../dist/meta";
import { version } from "../package.json";

const Home: React.FC<{}> = () => {
  const [filter, setFilter] = useState<string>("");

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);

  const filteredIcons: Array<string> = meta?.filter((icon) =>
    icon.includes(filter)
  );

  return (
    <Container>
      <Flex isColumn={true} gap={12}>
        <Flex isColumn={true} gap={12}>
          <Heading level={1}>
            <Flex gap={8} isYCentered={true}>
              <Icon name="crown" size={32} color="blue" />
              <span>FUI Icons</span>
              <Pill
                isSmall={true}
                color="blue"
                label={`${meta.length} icons`}
              />
            </Flex>
          </Heading>
          <Heading level={4} fontWeight="normal">
            A tiny, human and functional icon library designed for{" "}
            <a
              className="blue-500 hover:blue-700"
              href="https://ui.fractures.dev/"
            >
              Fractures UI
            </a>
            .
            <br />
            Solid SVGs only, designed on a 24pt grid.
          </Heading>
          <Separator />
          <Flex isColumn={true} gap={2}>
            <Flex gap={4} isYCentered={true}>
              <Icon color="gray" size={16} name="arrow-right" />
              <Text fontFamily="mono" type="small" color="gray">
                Add to your project with yarn add @fractures/icons
              </Text>
              <Pill
                label={`${version}`}
                color="blue"
                isSmall={true}
                isDark={true}
              />
            </Flex>
            <Flex gap={4} isYCentered={true}>
              <Icon color="gray" size={16} name="arrow-right" />
              <Text fontFamily="mono" type="small" color="gray">
                Import svgs directly from @fractures/icons/dist/arrow-right
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Separator />
        <Input
          label="Find an icon"
          onChange={onFilter}
          isLabelHidden={true}
          value={filter}
          placeholder="Eg.: arrow"
          type="text"
        />
        <Flex isWrapping={true}>
          {meta.map((icon, key) => {
            const isFound: boolean = filteredIcons.includes(icon);
            const Icon = lazy(() => import(`../src/icons/${icon}.svg`));

            return (
              <Flex
                key={key}
                gap={2}
                padding={4}
                isCentered={true}
                isColumn={true}
                className={
                  isFound
                    ? "bg-green-100 green-600 h-48 w-48"
                    : "bg-gray-100 gray-800 h-48 w-48"
                }
              >
                <Suspense fallback={null}>
                  <Icon height={48} width={48} />
                </Suspense>
                <Text type="tiny">{icon}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
