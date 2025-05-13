import GeneralButton from './GeneralButton';

export default function GeneralTable({ headers, data, onAction, actionLabel = "Click" }) {

    return <table className="min-w-full bg-white border border-gray-200">
        <thead>
            <tr>
                {headers.map(header => (
                    <th key={header.key} className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header.label}
                    </th>
                ))}
                {onAction && (
                    <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" > Actions </th>
                )}
            </tr>
        </thead>
        <tbody>
            {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                    {headers.map(header => (
                        <td key={header.key} className="px-4 py-2 border-b border-gray-200"> {item[header.key]}</td>
                    ))}
                    {onAction && (
                        <td className="px-4 py-2 border-b border-gray-200"> <GeneralButton text={actionLabel} onClick={() => onAction(item)} /> </td>
                    )}
                </tr>
            ))}
        </tbody>
    </table>
}