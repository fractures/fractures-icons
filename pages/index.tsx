import React, { Suspense, lazy, useState } from "react";
import {
  Flex,
  Text,
  Separator,
  Input,
  Container,
  Heading,
  Icon,
} from "@fractures/ui";
import { meta } from "../dist/meta";
import { version } from "../package.json";
import IconFlash from "../src/icons/flash.svg";

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
            </Flex>
          </Heading>
          <Flex gap={8}>
            <Flex isColumn={true}>
              <Flex gap={4} isYCentered={true}>
                <Heading level={3} fontWeight="normal">
                  {meta.length}
                </Heading>
                <IconFlash height={16} width={16} />
              </Flex>
              <Text type="small" color="gray">
                icons
              </Text>
            </Flex>
            <Flex isColumn={true}>
              <Flex gap={4} isYCentered={true}>
                <Heading level={3} fontWeight="normal">
                  {version}
                </Heading>
                <IconFlash height={16} width={16} />
              </Flex>
              <Text type="small" color="gray">
                version
              </Text>
            </Flex>
          </Flex>
          <Heading level={4} fontWeight="normal">
            A tiny, human and functional icon library.
            <br />
            Hand-crafted, solid SVGs. Only the essentials.
          </Heading>
          <Separator />
          <Flex isColumn={true} gap={2}>
            <Flex gap={4} isYCentered={true}>
              <Icon color="gray" size={16} name="arrow-right" />
              <Text fontFamily="mono" type="small" color="gray">
                Add to your project with yarn add @fractures/icons
              </Text>
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
        <Flex isWrapping={true} gap={2}>
          {filteredIcons.map((icon, key) => {
            const isFound: boolean = filteredIcons.includes(icon);
            const Icon = lazy(() => import(`../src/icons/${icon}.svg`));

            return (
              <Flex
                key={key}
                gap={2}
                padding={4}
                isCentered={true}
                isColumn={true}
                className="bg-gray-25 gray-800 radius-3 h-48 w-48"
              >
                <div className="h-24 w-24">
                  <Suspense fallback={null}>
                    <Icon height={48} width={48} />
                  </Suspense>
                </div>
                <Text type="small">{icon}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <style jsx={true} global={true}>{`
        path {
          fill: currentColor;
        }
      `}</style>
    </Container>
  );
};

export default Home;
