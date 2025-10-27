import {Args, Command, Flags} from '@oclif/core'
import React from 'react'
import {render, Text, Box} from 'ink'

type DocsProps = {
  topic?: string
  format: string
}

const DocsComponent: React.FC<DocsProps> = ({topic, format}) => {
  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="cyan" padding={1}>
        <Text bold color="cyan">
          MCP Documentation
        </Text>
      </Box>
      <Box flexDirection="column" marginTop={1}>
        {topic ? (
          <>
            <Text>
              Topic: <Text bold color="yellow">{topic}</Text>
            </Text>
            <Text dimColor>Format: {format}</Text>
            <Box marginTop={1} flexDirection="column">
              <Text color="green">Documentation Content:</Text>
              <Text>
                This would display documentation for <Text bold>{topic}</Text>
              </Text>
              <Text dimColor>
                Integration with MCP docs system would go here...
              </Text>
            </Box>
          </>
        ) : (
          <Box flexDirection="column">
            <Text color="green">Available Documentation Topics:</Text>
            <Text>  - mcp-protocol</Text>
            <Text>  - server-setup</Text>
            <Text>  - client-integration</Text>
            <Text>  - api-reference</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default class Docs extends Command {
  static args = {
    topic: Args.string({description: 'Documentation topic to view', required: false}),
  }

  static description = 'Access MCP documentation'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> mcp-protocol',
    '<%= config.bin %> <%= command.id %> server-setup --format markdown',
  ]

  static flags = {
    format: Flags.string({
      char: 'f',
      default: 'terminal',
      description: 'Output format',
      options: ['terminal', 'markdown', 'json'],
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Docs)

    const {waitUntilExit} = render(
      React.createElement(DocsComponent, {
        format: flags.format,
        topic: args.topic,
      }),
    )

    await waitUntilExit()
  }
}
