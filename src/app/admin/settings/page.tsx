"use client";

import { motion } from "framer-motion";
import {
    Settings,
    Shield,
    User,
    Bell,
    Globe,
    Database,
    ArrowRight,
    Save
} from "lucide-react";

export default function SettingsPage() {
    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-accent mb-2">System Settings</h1>
                    <p className="text-gray-500 font-medium">Configure your admin environment and site preferences.</p>
                </div>
                <button className="btn-primary !py-4 flex items-center gap-2">
                    <Save size={18} /> Save All Changes
                </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-10">
                    {/* Profile Settings */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-[32px] bg-primary text-white flex items-center justify-center font-black text-3xl mb-6 shadow-xl shadow-primary/20">
                            AS
                        </div>
                        <h3 className="text-2xl font-black text-accent mb-2">Admin Strategist</h3>
                        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-10">Super User Account</p>

                        <div className="w-full space-y-4 text-left">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                    <input type="text" value="Admin Strategist" className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-16 py-4 font-bold text-accent outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Email Address</label>
                                <div className="relative">
                                    <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                    <input type="email" value="admin@thinqmedia.com" className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-16 py-4 font-bold text-accent outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-black text-accent mb-8 flex items-center gap-3">
                            <Shield className="text-primary" /> Security & Access
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center p-6 rounded-3xl bg-[#f8faff] border border-gray-100">
                                <div>
                                    <p className="font-black text-accent">Two-Factor Authentication</p>
                                    <p className="text-xs text-gray-400 font-medium">Add an extra layer of security</p>
                                </div>
                                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all" />
                                </div>
                            </div>
                            <button className="w-full py-4 rounded-2xl border-2 border-primary/20 text-primary font-black uppercase tracking-widest text-sm hover:bg-primary/5 transition-all">
                                Change Security Key
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    {/* Site Configuration */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-black text-accent mb-8 flex items-center gap-3">
                            <Globe className="text-primary" /> Site Configuration
                        </h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block ml-2">Site Maintenance Mode</label>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 rounded-2xl bg-primary text-white font-black text-sm">OFF</button>
                                    <button className="flex-1 py-4 rounded-2xl bg-gray-100 text-gray-400 font-black text-sm hover:bg-gray-200 transition-all">ON</button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block ml-2">Database Connection</label>
                                <div className="flex items-center gap-4 bg-green-50 border border-green-100 p-6 rounded-3xl">
                                    <Database className="text-green-500" />
                                    <div>
                                        <p className="font-black text-green-700">PostgreSQL Status: Live</p>
                                        <p className="text-xs text-green-600 font-medium text-opacity-80">Connected to thinqmedia_db</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-black text-accent mb-8 flex items-center gap-3">
                            <Bell className="text-primary" /> Notifications
                        </h3>
                        <div className="space-y-6">
                            {[
                                { label: "New Lead Alerts", active: true },
                                { label: "Blog Comment Moderation", active: true },
                                { label: "Visitor Milestone Updates", active: false },
                            ].map((notif, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <p className="font-bold text-gray-500">{notif.label}</p>
                                    <div className={`w-12 h-6 rounded-full relative transition-colors ${notif.active ? 'bg-primary' : 'bg-gray-200'}`}>
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notif.active ? 'right-1' : 'left-1'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
