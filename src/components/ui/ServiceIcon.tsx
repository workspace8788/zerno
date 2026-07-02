"use client";

import {
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineCog6Tooth,
  HiOutlineArrowPath,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineUserGroup,
  HiOutlineMegaphone,
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlinePaintBrush,
  HiOutlineChartBar,
  HiOutlineDevicePhoneMobile,
  HiOutlineServerStack,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineSquare3Stack3D,
  HiOutlineArrowTrendingUp,
  HiOutlineHandRaised,
  HiOutlineBuildingOffice2,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineBeaker,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  globe: HiOutlineGlobeAlt,
  code: HiOutlineCodeBracket,
  brain: HiOutlineCpuChip,
  automation: HiOutlineCog6Tooth,
  workflow: HiOutlineArrowPath,
  cloud: HiOutlineCloud,
  database: HiOutlineCircleStack,
  users: HiOutlineUserGroup,
  ads: HiOutlineMegaphone,
  search: HiOutlineMagnifyingGlass,
  map: HiOutlineMapPin,
  palette: HiOutlinePaintBrush,
  chart: HiOutlineChartBar,
  mobile: HiOutlineDevicePhoneMobile,
  server: HiOutlineServerStack,
  design: HiOutlineSparkles,
  consult: HiOutlineLightBulb,
  shield: HiOutlineShieldCheck,
  target: HiOutlineArrowTrendingUp,
  rocket: HiOutlineRocketLaunch,
  layers: HiOutlineSquare3Stack3D,
  trending: HiOutlineArrowTrendingUp,
  handshake: HiOutlineHandRaised,
  building: HiOutlineBuildingOffice2,
  compass: HiOutlineSparkles,
  truck: HiOutlineTruck,
  factory: HiOutlineBeaker,
  health: HiOutlineHeart,
  school: HiOutlineAcademicCap,
  store: HiOutlineBuildingStorefront,
  restaurant: HiOutlineBuildingStorefront,
  pin: HiOutlineMapPin,
};

export function ServiceIcon({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] || HiOutlineSparkles;
  return <Icon className={className} aria-hidden />;
}
