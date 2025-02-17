import { useRef, useEffect, useState, useCallback } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Wheat, Monitor, Zap } from 'lucide-react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import mapImage from '../assets/int-map2.webp';

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const transformRef = useRef(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isTransformReady, setIsTransformReady] = useState(false);


    const barData = [
        { name: 'Агро', Местные: 50, Иностранные: 70 },
        { name: 'IT', Местные: 30, Иностранные: 60 },
        { name: 'Энергетика', Местные: 15, Иностранные: 30 },
    ];

    const pieData = [
        { name: 'Китай', value: 40 },
        { name: 'Германия', value: 30 },
        { name: 'ОАЭ', value: 20 },
        { name: 'Прочие', value: 10 },
    ];

    const investmentData = [
        { sector: 'Агро', amount: '$2,5 млн', icon: <Wheat className="text-yellow-500" /> },
        { sector: 'IT', amount: '$1,2 млн', icon: <Monitor className="text-red-500" /> },
        { sector: 'Энергетика', amount: '$5 млн', icon: <Zap className="text-blue-500" /> },
    ];

    const requiredInvestmentData = [
        { sector: 'Агро', Объём: 15000 },
        { sector: 'IT', Объём: 7500 },
        { sector: 'Энергетика', Объём: 12000 },
    ];

    const colors = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'];

    const formatAmount = (amount) => `$${(amount / 100).toFixed(1)} млн`;

    const handleImageLoad = () => {
        setIsImageLoaded(true);
        setIsLoading(false);
    };

    const transformRefCallback = useCallback((node) => {
        if (node !== null) {
            transformRef.current = node;
            setIsTransformReady(true);
        }
    }, []);

    useEffect(() => {
        if (isImageLoaded && isTransformReady && transformRef.current) {
            const { setTransform } = transformRef.current;
            setTransform(-600, -150, 2);
        }
    }, [isImageLoaded, isTransformReady]);

return (
        <div className="relative min-h-screen">
            {isLoading && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            )}

            <div className={`flex flex-row min-h-screen bg-gray-50 p-4 ${isLoading ? 'invisible' : 'visible'}`}>
                <div className="flex-1 p-4">
                    <p className="text-3xl font-bold text-gray-800 mb-8">Аналитика заявок и инвестиций</p>
                    <div className="grid grid-cols-4 gap-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Средний объем инвестиций на сделку</h2>
                        {investmentData.map((item, index) => (
                            <div key={index} className="flex items-center bg-white-100 p-4 rounded-lg shadow-sm">
                                <div className="mr-6 pl-2 text-4xl">{item.icon}</div>
                                <div className="text-left">
                                    <span className="block text-sm text-gray-600">{item.sector}</span>
                                    <span className="block text-2xl font-bold text-gray-800">{item.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Количество заявок по секторам</h2>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                    <XAxis dataKey="name" stroke="#666" tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#666" tick={{ fontSize: 12 }} />
                                    <Tooltip />
                                    <Bar dataKey="Местные" fill="#007AFF" />
                                    <Bar dataKey="Иностранные" fill="#0057B7" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Заявки по странам</h2>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={70}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Объем требуемых инвестиций по секторам за Q1 2025</h2>
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart
                                    data={[
                                        ...requiredInvestmentData,
                                        { sector: 'Итого', Объём: requiredInvestmentData.reduce((sum, item) => sum + item.Объём, 0) },
                                    ]}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                    <XAxis dataKey="sector" stroke="#666" tick={{ fontSize: 12 }} />
                                    <YAxis
                                        stroke="#666"
                                        tick={{ fontSize: 12 }}
                                        domain={[0, 'auto']}
                                    />
                                    <Tooltip formatter={(value) => formatAmount(value)} />
                                    <Bar dataKey="Объём" fill="#0057B7">
                                        <LabelList dataKey="Объём" position="top" formatter={(value) => formatAmount(value)} />
                                        {requiredInvestmentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill="#007AFF" />
                                        ))}
                                        <Cell key="cell-total" fill="#0057B7" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Инвестиции по странам</h2>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                        <TransformWrapper
                            ref={transformRefCallback}
                            initialScale={2}
                            minScale={1}
                            maxScale={4}
                        >
                            <TransformComponent>
                                <img
                                    src={mapImage}
                                    alt="Интерактивная карта"
                                    className="w-full h-full object-cover"
                                    onLoad={handleImageLoad}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Dashboard;