import {Args, Command, Flags} from '@oclif/core'
import React from 'react'
import {render, Text, Box} from 'ink'

type Task = {
  id: number
  name: string
  status: 'pending' | 'running' | 'completed' | 'failed'
}

type TasksProps = {
  tasks: Task[]
  action?: string
  taskId?: number
}

const TasksComponent: React.FC<TasksProps> = ({tasks, action, taskId}) => {
  const getStatusColor = (status: Task['status']) => {
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

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return '✓'
      case 'failed':
        return '✗'
      case 'running':
        return '◐'
      default:
        return '○'
    }
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Box borderStyle="round" borderColor="magenta" padding={1}>
        <Text bold color="magenta">
          MCP Task Manager
        </Text>
      </Box>
      {action && taskId && (
        <Box marginTop={1}>
          <Text color="cyan">
            Action: <Text bold>{action}</Text> on task #{taskId}
          </Text>
        </Box>
      )}
      <Box flexDirection="column" marginTop={1}>
        <Text color="green" bold>
          Active Tasks:
        </Text>
        {tasks.map((task) => (
          <Box key={task.id} marginLeft={2}>
            <Text color={getStatusColor(task.status)}>
              {getStatusIcon(task.status)}
            </Text>
            <Text> </Text>
            <Text>
              #{task.id} - {task.name}
            </Text>
            <Text dimColor> [{task.status}]</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default class Tasks extends Command {
  static args = {
    action: Args.string({
      description: 'Task action',
      options: ['list', 'start', 'stop', 'status'],
      required: false,
    }),
  }

  static description = 'Manage MCP tasks and workflows'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> list',
    '<%= config.bin %> <%= command.id %> start --task-id 1',
    '<%= config.bin %> <%= command.id %> stop --task-id 2',
  ]

  static flags = {
    'task-id': Flags.integer({char: 't', description: 'Task ID'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Tasks)

    // Mock tasks data
    const tasks: Task[] = [
      {id: 1, name: 'MCP Server Health Check', status: 'completed'},
      {id: 2, name: 'Process Discord Messages', status: 'running'},
      {id: 3, name: 'Sync Google Sheets', status: 'pending'},
      {id: 4, name: 'Telegram Bot Update', status: 'running'},
    ]

    const {waitUntilExit} = render(
      React.createElement(TasksComponent, {
        action: args.action,
        taskId: flags['task-id'],
        tasks,
      }),
    )

    await waitUntilExit()
  }
}
