import type { StaticImageData } from "next/image";
import sns_1 from "@/assets/work/sns/sns_1.webp";
import sns_2 from "@/assets/work/sns/sns_2.webp";
import sns_3 from "@/assets/work/sns/sns_3.webp";
import sns_4 from "@/assets/work/sns/sns_4.webp";
import sns_5 from "@/assets/work/sns/sns_5.webp";
import sns_6 from "@/assets/work/sns/sns_6.webp";
import CF_1 from "@/assets/work/cf/CF_1.webp";
import CF_2 from "@/assets/work/cf/CF_2.webp";
import CF_3 from "@/assets/work/cf/CF_3.webp";
import CF_4 from "@/assets/work/cf/CF_4.webp";
import CF_5 from "@/assets/work/cf/CF_5.webp";
import CF_6 from "@/assets/work/cf/CF_6.webp";
import did_1 from "@/assets/work/did/did_1.webp";
import did_2 from "@/assets/work/did/did_2.webp";
import did_3 from "@/assets/work/did/did_3.webp";
import pa_1 from "@/assets/work/pa/pa_1.webp";
import pa_2 from "@/assets/work/pa/pa_2.webp";
import om_1 from "@/assets/work/om/om_1.webp";
import om_2 from "@/assets/work/om/om_2.webp";
import om_3 from "@/assets/work/om/om_3.webp";

export type DesignGroup = {
  title: string;
  /** 이미지 비율이 섞인 그룹은 기존 사이트처럼 개별 폭을 지정한다 */
  variant: "default" | "did" | "pa" | "om";
  images: { src: StaticImageData; alt: string }[];
};

/** 기존 .bot1 (Design Barog Clinic) 이미지 목록 */
export const DESIGN_GROUPS: DesignGroup[] = [
  {
    title: "1.강남점 월 sns 이벤트(해외포함)",
    variant: "default",
    images: [
      { src: sns_1, alt: "강남점 월 sns 이벤트(해외포함) 1" },
      { src: sns_2, alt: "강남점 월 sns 이벤트(해외포함) 2" },
      { src: sns_3, alt: "강남점 월 sns 이벤트(해외포함) 3" },
      { src: sns_4, alt: "강남점 월 sns 이벤트(해외포함) 4" },
      { src: sns_5, alt: "강남점 월 sns 이벤트(해외포함) 5" },
      { src: sns_6, alt: "강남점 월 sns 이벤트(해외포함) 6" },
    ],
  },
  {
    title: "2.전지점 카카오톡 플친 월이벤트(30지점)",
    variant: "default",
    images: [
      { src: CF_1, alt: "전지점 카카오톡 플친 월이벤트(30지점) 1" },
      { src: CF_2, alt: "전지점 카카오톡 플친 월이벤트(30지점) 2" },
      { src: CF_3, alt: "전지점 카카오톡 플친 월이벤트(30지점) 3" },
      { src: CF_4, alt: "전지점 카카오톡 플친 월이벤트(30지점) 4" },
      { src: CF_5, alt: "전지점 카카오톡 플친 월이벤트(30지점) 5" },
      { src: CF_6, alt: "전지점 카카오톡 플친 월이벤트(30지점) 6" },
    ],
  },
  {
    title: "3.전단지 및 did 영상 제작",
    variant: "did",
    images: [
      { src: did_1, alt: "전단지 및 did 영상 제작 1" },
      { src: did_2, alt: "전단지 및 did 영상 제작 2" },
      { src: did_3, alt: "전단지 및 did 영상 제작 3" },
    ],
  },
  {
    title: "4.시트지,제휴쿠폰",
    variant: "pa",
    images: [
      { src: pa_1, alt: "시트지,제휴쿠폰 1" },
      { src: pa_2, alt: "시트지,제휴쿠폰 2" },
    ],
  },
  {
    title: "5.해외 마케팅",
    variant: "om",
    images: [
      { src: om_1, alt: "해외 마케팅 1" },
      { src: om_2, alt: "해외 마케팅 2" },
      { src: om_3, alt: "해외 마케팅 3" },
    ],
  },
];
