import {Flex, Text, Separator, Input, Pill, Container, Heading, Tile, Icon, type FUIIconType} from '@fractures/ui'
import {meta} from '../dist/meta';
import React, {useState} from 'react';
import {version} from '../package.json';

const Home: React.FC<{}> = () => {
  const [filter, setFilter] = useState<string>('');

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value);

  const filteredIcons: Array<string> = meta?.filter(icon => icon.includes(filter));

  return (
<Container>
  <Flex isColumn={true} gap={16}>
    <Flex isColumn={true} gap={6}>
      <Heading level={1}>
        <Flex gap={8} isYCentered={true}>
          <Icon name='crown' size={32} color='blue'/>
          <span>Fracture Icons</span>
          <Pill isSmall={true} color='blue' label={`${meta.length} icons`}/>
        </Flex>
      </Heading>
      <Heading level={4} fontWeight='normal'>
      A tiny, human and functional icon library designed for <a className='blue-500 hover:blue-700' href='https://ui.fractures.dev/'>Fractures UI</a>.
      <br/>Solids only, designed on a 24pt grid.
      </Heading>
      <Separator/>
      <Flex isColumn={true} gap={2}>
        <Flex gap={4} isYCentered={true}>
          <Icon color='gray' size={16} name='arrow-right'/>
          <Text type='small' color='gray'>Add to your project with</Text>
          <Text fontFamily='mono' type='small' color='gray'>yarn add @fractures/icons</Text>
          <Pill label={`${version}`} color='blue' isSmall={true} isDark={true}/>
        </Flex>
        <Flex gap={4} isYCentered={true}>
          <Icon color='gray' size={16} name='arrow-right'/>
          <Text type='small' color='gray'>Import svgs directly</Text>
          <Text fontFamily='mono' type='small' color='gray'>from @fractures/icons/dist/arrow-right</Text>
        </Flex>
      </Flex>
    </Flex>
    <Separator/>
      <Input label='Find an icon' onChange={onFilter} value={filter} placeholder='Eg.: arrow' type='text'/>
      <Flex isWrapping={true}>
        {meta.map((icon, key) => {
          const isFound: boolean = filteredIcons.includes(icon);

          return (
            <Tile color={isFound ? 'green' : 'red'} size={80} icon={icon as FUIIconType} key={key}>
              <Text type='tiny' color={isFound ? 'dark-green' : 'dark-red'}>{icon}</Text>
            </Tile>
          )
        })}
      </Flex>
        </Flex>
    </Container>
  )
}

export default Home
