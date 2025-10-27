import {Args, Command, Flags} from '@oclif/core'
import React from 'react'
import {render, Text, Box} from 'ink'
import Spinner from 'ink-spinner'

type MessageProps = {
  message: string
  recipient?: string
  loading?: boolean
}

const MessageComponent: React.FC<MessageProps> = ({message, recipient, loading = false}) => {
  return (
    <Box flexDirection="column" padding={1}>
      <Box>
        <Text bold color="cyan">
          MCP Message Command
        </Text>
      </Box>
      {loading ? (
        <Box marginTop={1}>
          <Text color="yellow">
            <Spinner type="dots" />
          </Text>
          <Text> Sending message...</Text>
        </Box>
      ) : (
        <Box flexDirection="column" marginTop={1}>
          <Text color="green">Message sent successfully!</Text>
          {recipient && (
            <Text>
              To: <Text color="magenta">{recipient}</Text>
            </Text>
          )}
          <Text>
            Content: <Text color="white">{message}</Text>
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default class Message extends Command {
  static args = {
    content: Args.string({description: 'Message content to send', required: true}),
  }

  static description = 'Send a message via MCP protocol'

  static examples = [
    '<%= config.bin %> <%= command.id %> "Hello World"',
    '<%= config.bin %> <%= command.id %> "Task update" --recipient mcp-server',
  ]

  static flags = {
    recipient: Flags.string({char: 'r', description: 'Message recipient'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Message)

    // Show loading state
    const {unmount, waitUntilExit} = render(
      React.createElement(MessageComponent, {
        loading: true,
        message: args.content,
        recipient: flags.recipient,
      }),
    )

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Update to success state
    unmount()
    render(
      React.createElement(MessageComponent, {
        loading: false,
        message: args.content,
        recipient: flags.recipient,
      }),
    )

    await waitUntilExit()
  }
}
