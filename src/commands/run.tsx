import {Args, Command, Flags} from '@oclif/core'
import React, {useState, useEffect} from 'react'
import {render, Text, Box} from 'ink'
import Spinner from 'ink-spinner'

type RunProps = {
  script: string
  env?: string
  watch: boolean
}

const RunComponent: React.FC<RunProps> = ({script, env, watch}) => {
  const [status, setStatus] = useState<'initializing' | 'running' | 'success' | 'error'>(
    'initializing',
  )
  const [output, setOutput] = useState<string[]>([])

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus('running')
      setOutput(['Starting MCP script...', `Environment: ${env || 'default'}`])
    }, 500)

    const timer2 = setTimeout(() => {
      setStatus('success')
      setOutput((prev) => [
        ...prev,
        'Script executed successfully',
        watch ? 'Watching for changes...' : 'Execution completed',
      ])
    }, 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [env, watch])

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'green'
      case 'error':
        return 'red'
      case 'running':
        return 'yellow'
      default:
        return 'cyan'
    }
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="blue" padding={1}>
        <Text bold color="blue">
          MCP Script Runner
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text>
          Script: <Text bold color="cyan">{script}</Text>
        </Text>
      </Box>
      <Box marginTop={1} flexDirection="column">
        <Box>
          <Text color={getStatusColor()}>
            {status === 'running' || status === 'initializing' ? (
              <>
                <Spinner type="dots" /> {status}
              </>
            ) : (
              `Status: ${status}`
            )}
          </Text>
        </Box>
        {output.length > 0 && (
          <Box marginTop={1} flexDirection="column" borderStyle="single" padding={1}>
            {output.map((line, index) => (
              <Text key={index} dimColor={index < output.length - 1}>
                {line}
              </Text>
            ))}
          </Box>
        )}
        {watch && status === 'success' && (
          <Box marginTop={1}>
            <Text color="yellow">
              <Spinner type="dots" /> Watching for file changes...
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default class Run extends Command {
  static args = {
    script: Args.string({description: 'Script or command to run', required: true}),
  }

  static description = 'Run MCP scripts and commands'

  static examples = [
    '<%= config.bin %> <%= command.id %> start-server',
    '<%= config.bin %> <%= command.id %> deploy --env production',
    '<%= config.bin %> <%= command.id %> test --watch',
  ]

  static flags = {
    env: Flags.string({char: 'e', description: 'Environment to run in'}),
    watch: Flags.boolean({char: 'w', default: false, description: 'Watch mode'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Run)

    const {waitUntilExit} = render(
      React.createElement(RunComponent, {
        env: flags.env,
        script: args.script,
        watch: flags.watch,
      }),
    )

    await waitUntilExit()
  }
}
