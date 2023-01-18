interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="bg-zinc-900 h-24 w-20 text-white rounded m-2 flex items-center justify-center"
        >Hábitos: {props.completed}</div>
    )
} 