"use client";

import { OmsuGroupType, OmsuScheduleType } from "@/types";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase.config";

type DataToFirebaseProps = {
  schedule:
    | {
        day: string;
        lessons: OmsuScheduleType[];
      }[]
    | undefined;
  groups: OmsuGroupType[];
  allSchedule: {
    group: string;
    schedule:
      | {
          day: string;
          lessons: OmsuScheduleType[];
        }[]
      | undefined;
  }[];
};

const DataToFirebase = ({ schedule, groups }: DataToFirebaseProps) => {
  const addGroupsToFirebase = async () => {
    try {
      Promise.all(
        groups.map(async (group) => {
          const ref = doc(db, "omsu-groups", group.id.toString());

          await setDoc(ref, group);
        })
      );

      console.log("SUCCESS");
    } catch (err) {
      console.log(err);
    }
  };

  const addScheduleToFirebase = async () => {
    try {
      // Promise.all(
      //   schedule.map(async (sch) => {
      //     const ref = collection(db, "omsu-schedule");
      //     await addDoc(ref, { group: sch.group }).then(({ path }) => {
      //       if (!sch.schedule) return;
      //       const ref = collection(db, `${path}/${sch.schedule.day}`);
      //       sch.schedule?.lessons.forEach(async (lesson) => {
      //         addDoc(ref, lesson);
      //       });
      //     });
      //   })
      // );
      // console.log(schedule);

      console.log(schedule);

      if (!schedule) throw new Error("no data");

      const ref = doc(db, "omsu-schedule", "ЯПБ-901-О-11");
      await setDoc(ref, { group: "ЯПБ-901-О-11" }).then(() => {
        schedule.forEach(async ({ day, lessons }) => {
          const ref = collection(db, `omsu-schedule/ЯПБ-901-О-11/${day}`);

          lessons.forEach(async (lesson) => {
            await addDoc(ref, lesson);
          });
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button className="btn" onClick={addGroupsToFirebase}>
        Send groups
      </button>
      <button className="btn" onClick={addScheduleToFirebase}>
        Send schedule
      </button>
    </div>
  );
};

export default DataToFirebase;
