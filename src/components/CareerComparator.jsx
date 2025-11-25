import { X, DollarSign, TrendingUp, BookOpen, MapPin, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const CareerComparator = ({ careers, onClose }) => {
    // Limit to max 3 careers for comparison
    const careersToCompare = careers.slice(0, 3);

    if (careersToCompare.length === 0) return null;

    const compareField = (values) => {
        // Find max value to highlight
        const numValues = values.map(v => {
            if (typeof v === 'string' && v.includes('S/')) {
                return parseInt(v.split('S/')[1].replace(',', '').split('-')[0]);
            }
            return 0;
        });
        const maxValue = Math.max(...numValues);
        return values.map((v, i) => numValues[i] === maxValue);
    };

    const salaryValues = careersToCompare.map(c => c.salary);
    const isSalaryMax = compareField(salaryValues);

    const demandMap = { 'Muy Alta': 4, 'Alta': 3, 'Media': 2, 'Baja': 1 };
    const demandValues = careersToCompare.map(c => demandMap[c.demand] || 0);
    const maxDemand = Math.max(...demandValues);

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 border-b border-slate-800 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            🔀 Comparador de Carreras
                        </h2>
                        <p className="text-slate-400 text-sm mt-1">Compara las diferencias clave entre tus opciones</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Comparison Table */}
                <div className="overflow-auto max-h-[calc(90vh-100px)]">
                    <table className="w-full">
                        <thead className="bg-slate-900/50 sticky top-0">
                            <tr>
                                <th className="text-left p-4 text-slate-400 font-semibold">Criterio</th>
                                {careersToCompare.map((career, idx) => (
                                    <th key={career.id} className="p-4 text-center">
                                        <div className="text-white font-bold mb-1">{career.title}</div>
                                        {career.score && (
                                            <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full inline-block">
                                                {career.score}% Match
                                            </div>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Salary */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-green-400" />
                                    Salario Promedio
                                </td>
                                {careersToCompare.map((career, idx) => (
                                    <td key={career.id} className={`p-4 text-center ${isSalaryMax[idx] ? 'bg-green-500/10' : ''}`}>
                                        <div className={`font-semibold ${isSalaryMax[idx] ? 'text-green-400' : 'text-white'}`}>
                                            {career.salary}
                                            {isSalaryMax[idx] && <Award className="inline h-4 w-4 ml-1" />}
                                        </div>
                                    </td>
                                ))}
                            </tr>

                            {/* Demand */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-blue-400" />
                                    Demanda Laboral
                                </td>
                                {careersToCompare.map((career, idx) => (
                                    <td key={career.id} className={`p-4 text-center ${demandValues[idx] === maxDemand ? 'bg-blue-500/10' : ''}`}>
                                        <div className={`font-semibold ${demandValues[idx] === maxDemand ? 'text-blue-400' : 'text-white'}`}>
                                            {career.demand}
                                            {demandValues[idx] === maxDemand && <Award className="inline h-4 w-4 ml-1" />}
                                        </div>
                                    </td>
                                ))}
                            </tr>

                            {/* Duration */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-purple-400" />
                                    Duración
                                </td>
                                {careersToCompare.map(career => (
                                    <td key={career.id} className="p-4 text-center">
                                        <div className="text-white font-semibold">{career.duration}</div>
                                    </td>
                                ))}
                            </tr>

                            {/* Top University */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-yellow-400" />
                                    Universidad Top
                                </td>
                                {careersToCompare.map(career => (
                                    <td key={career.id} className="p-4 text-center">
                                        <div className="text-white font-semibold">{career.universities[0]?.name || 'N/A'}</div>
                                        <div className="text-xs text-slate-400 mt-1">{career.universities[0]?.location || ''}</div>
                                    </td>
                                ))}
                            </tr>

                            {/* Description */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium align-top">
                                    Descripción
                                </td>
                                {careersToCompare.map(career => (
                                    <td key={career.id} className="p-4">
                                        <div className="text-sm text-slate-400 leading-relaxed">{career.description}</div>
                                    </td>
                                ))}
                            </tr>

                            {/* Key Areas (Tags) */}
                            <tr className="border-t border-slate-800">
                                <td className="p-4 text-slate-300 font-medium align-top">
                                    Áreas Clave
                                </td>
                                {careersToCompare.map(career => (
                                    <td key={career.id} className="p-4">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {career.tags?.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800 bg-slate-900 text-center">
                    <p className="text-xs text-slate-500">
                        💡 Las celdas destacadas indican el mejor valor en cada categoría
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareerComparator;
