import {Args, Command, Flags} from '@oclif/core'
import React from 'react'
import {render, Text, Box} from 'ink'

type PlaybookStep = {
  name: string
  status: 'pending' | 'running' | 'completed' | 'failed'
}

type PlaybookProps = {
  name: string
  action: string
  steps: PlaybookStep[]
}

const PlaybookComponent: React.FC<PlaybookProps> = ({name, action, steps}) => {
  const getStatusIcon = (status: PlaybookStep['status']) => {
    switch (status) {
      case 'completed':
        return '✓'
      case 'failed':
        return '✗'
      case 'running':
        return '▶'
      default:
        return '○'
    }
  }

  const getStatusColor = (status: PlaybookStep['status']) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'failed':
        return 'red'
      case 'running':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="green" padding={1}>
        <Text bold color="green">
          MCP Playbook Runner
        </Text>
      </Box>
      <Box marginTop={1} flexDirection="column">
        <Text>
          Playbook: <Text bold color="yellow">{name}</Text>
        </Text>
        <Text>
          Action: <Text bold color="cyan">{action}</Text>
        </Text>
      </Box>
      <Box marginTop={1} flexDirection="column">
        <Text bold>Execution Steps:</Text>
        {steps.map((step, index) => (
          <Box key={index} marginLeft={2} marginTop={1}>
            <Text color={getStatusColor(step.status)}>{getStatusIcon(step.status)}</Text>
            <Text> </Text>
            <Text color={step.status === 'running' ? 'yellow' : undefined}>{step.name}</Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={1} borderStyle="single" padding={1}>
        <Text dimColor>Playbook execution would integrate with actual MCP workflows</Text>
      </Box>
    </Box>
  )
}

export default class Playbook extends Command {
  static args = {
    action: Args.string({
      description: 'Playbook action',
      options: ['run', 'validate', 'list'],
      required: false,
    }),
    name: Args.string({description: 'Playbook name', required: false}),
  }

  static description = 'Execute MCP playbooks and automation workflows'

  static examples = [
    '<%= config.bin %> <%= command.id %> list',
    '<%= config.bin %> <%= command.id %> run deploy-all',
    '<%= config.bin %> <%= command.id %> validate server-setup --verbose',
  ]

  static flags = {
    verbose: Flags.boolean({char: 'v', default: false, description: 'Verbose output'}),
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Playbook)

    const action = args.action || 'list'
    const playbookName = args.name || 'default-playbook'

    // Mock playbook steps
    const steps: PlaybookStep[] = [
      {name: 'Initialize MCP connections', status: 'completed'},
      {name: 'Validate server configurations', status: 'completed'},
      {name: 'Deploy services', status: 'running'},
      {name: 'Run health checks', status: 'pending'},
      {name: 'Cleanup and finalize', status: 'pending'},
    ]

    const {waitUntilExit} = render(
      React.createElement(PlaybookComponent, {
        action,
        name: playbookName,
        steps,
      }),
    )

    await waitUntilExit()
  }
}
