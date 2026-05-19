import { useRecoilState } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';

const FILTERS = [
    { value: 'todas',      label: 'Todas' },
    { value: 'pendentes',  label: 'Pendentes' },
    { value: 'concluidas', label: 'Concluídas' },
]

function TaskFilter() {
    const [filter, setFilter] = useRecoilState(filterAtom);

    return (
        <div className='task-filter'>
            {FILTERS.map(f => (
                <button
                    key={f.value}
                    className='btn-filter'
                    onClick={() => setFilter(f.value)}
                    disabled={filter===f.value}
                >
                    {f.label}
                </button>    
            ))}
        </div>
    );
}

export default TaskFilter
