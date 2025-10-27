import {Args, Command, Flags} from '@oclif/core'
import React from 'react'
import {render, Text, Box} from 'ink'

type RawProps = {
  method: string
  payload?: string
  endpoint?: string
  format: string
}

const RawComponent: React.FC<RawProps> = ({method, payload, endpoint, format}) => {
  const mockResponse = {
    status: 200,
    timestamp: new Date().toISOString(),
    data: {
      message: 'Raw MCP request processed',
      method: method,
      endpoint: endpoint || '/api/mcp/default',
    },
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="red" padding={1}>
        <Text bold color="red">
          MCP Raw Request
        </Text>
      </Box>
      <Box marginTop={1} flexDirection="column">
        <Text>
          Method: <Text bold color="yellow">{method.toUpperCase()}</Text>
        </Text>
        <Text>
          Endpoint: <Text color="cyan">{endpoint || '/api/mcp/default'}</Text>
        </Text>
        {payload && (
          <Box marginTop={1} flexDirection="column">
            <Text color="green">Payload:</Text>
            <Box borderStyle="single" padding={1}>
              <Text dimColor>{payload}</Text>
            </Box>
          </Box>
        )}
      </Box>
      <Box marginTop={1} flexDirection="column">
        <Text bold color="green">
          Response:
        </Text>
        <Box borderStyle="single" padding={1} flexDirection="column">
          {format === 'json' ? (
            <Text>{JSON.stringify(mockResponse, null, 2)}</Text>
          ) : (
            <>
              <Text>
                Status: <Text color="green">{mockResponse.status}</Text>
              </Text>
              <Text>Timestamp: {mockResponse.timestamp}</Text>
              <Text>Message: {mockResponse.data.message}</Text>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default class Raw extends Command {
  static args = {
    method: Args.string({
      description: 'HTTP method',
      options: ['get', 'post', 'put', 'delete', 'patch'],
      required: true,
    }),
  }

  static description = 'Send raw MCP protocol requests'

  static examples = [
    '<%= config.bin %> <%= command.id %> get',
    '<%= config.bin %> <%= command.id %> post --payload \'{"key":"value"}\'',
    '<%= config.bin %> <%= command.id %> get --endpoint /api/mcp/status --format json',
  ]

  static flags = {
    endpoint: Flags.string({char: 'e', description: 'API endpoint'}),
    format: Flags.string({
      char: 'f',
      default: 'pretty',
      description: 'Output format',
      options: ['pretty', 'json'],
    }),
    payload: Flags.string({char: 'p', description: 'Request payload (JSON)'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Raw)

    const {waitUntilExit} = render(
      React.createElement(RawComponent, {
        endpoint: flags.endpoint,
        format: flags.format,
        method: args.method,
        payload: flags.payload,
      }),
    )

    await waitUntilExit()
  }
}
