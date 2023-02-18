import React from "react";

import { OmsuGroupType, OmsuScheduleType } from "@/types";
import { DataToFirebase } from "@/components/DataToFirebase";

const getGroups = async () => {
  const res = await fetch(
    "https://eservice.omsu.ru/schedule/backend/dict/groups"
  );

  const { data }: { data: OmsuGroupType[] } = await res.json();

  const groups = data.map((group) => {
    if (group.name !== "Резерв") {
      const year = Number(group.name.split("-")[1][0]);
      const course = Number((22 - year).toString()[1]) + 1;
      return { ...group, course };
    }

    return group;
  });

  return groups;
};

const getSchedule = async (group: number) => {
  try {
    const res = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/group/${group}`
    );

    if (!res.json) return;

    const { data }: { data: { day: string; lessons: OmsuScheduleType[] }[] } =
      await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const getScheduleAll = async () => {
  try {
    const groupRes = await fetch(
      "https://eservice.omsu.ru/schedule/backend/dict/groups"
    );

    const { data: groups }: { data: OmsuGroupType[] } = await groupRes.json();

    const allSchedule = await Promise.all(
      groups.map(async (group) => {
        const res = await fetch(
          `https://eservice.omsu.ru/schedule/backend/schedule/group/${group.id}`
        );

        if (!res.ok) return;

        const lessons = await res.json();

        return { group: group.name, schedule: lessons };
      })
    );

    return allSchedule;
  } catch (err) {
    console.log(err);
  }
};

const Settings = async () => {
  const groups = await getGroups();
  const schedule = await getSchedule(1342);
  const allSchedule = await getScheduleAll();

  console.table(allSchedule);

  return (
    <div>
      <DataToFirebase
        schedule={schedule}
        groups={groups}
        allSchedule={result}
      />
    </div>
  );
};

export default Settings;
