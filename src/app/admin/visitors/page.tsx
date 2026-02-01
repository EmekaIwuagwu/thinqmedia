import {
    Users,
    TrendingUp,
    MapPin,
    Clock,
    Monitor,
    Smartphone,
    Info
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function VisitorsPage() {
    const visitors = await prisma.visitor.findMany({
        orderBy: { startTime: "desc" },
        take: 50
    });

    const totalCount = visitors.length;

    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-accent mb-2">Visitor Analytics</h1>
                    <p className="text-gray-500 font-medium">Real-time data on who's visiting your digital presence.</p>
                </div>
                <div className="glass px-6 py-4 rounded-2xl border border-primary/10 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-black text-accent">{totalCount > 0 ? totalCount : 0} Active Now</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {[
                    { label: "Unique Visitors", value: totalCount.toString(), icon: <Users className="text-blue-500" />, sub: "+0% vs last week" },
                    { label: "Avg. Session", value: "0:00m", icon: <Clock className="text-purple-500" />, sub: "+0s increase" },
                    { label: "Bounce Rate", value: "0%", icon: <TrendingUp className="text-green-500 rotate-180" />, sub: "0% improvement" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <Info size={16} className="text-gray-200" />
                        </div>
                        <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                        <h3 className="text-3xl font-black text-accent mb-2">{stat.value}</h3>
                        <p className="text-xs font-bold text-gray-400">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                    <h3 className="text-xl font-black text-accent">Recent Activity</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#f8faff] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                <th className="px-8 py-6">Location</th>
                                <th className="px-8 py-6">Device</th>
                                <th className="px-8 py-6">Last Page</th>
                                <th className="px-8 py-6">Session Start</th>
                                <th className="px-8 py-6 text-right">Access</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {visitors.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-10 text-center text-gray-400 font-bold">No visitor data yet.</td>
                                </tr>
                            ) : (
                                visitors.map((visit) => (
                                    <tr key={visit.id} className="group hover:bg-[#f8faff]/50 transition-all font-medium">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <MapPin size={16} className="text-primary" />
                                                <span className="font-black text-accent">{visit.location || "Unknown"}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                {visit.device === "Desktop" ? <Monitor size={16} /> : <Smartphone size={16} />}
                                                <span className="text-sm font-bold">{visit.device || "Unknown"}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-primary text-sm font-bold">{visit.page}</td>
                                        <td className="px-8 py-6 text-gray-400 text-sm">
                                            {new Date(visit.startTime).toLocaleTimeString()}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{visit.ip}</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
