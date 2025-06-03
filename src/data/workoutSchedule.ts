interface Exercise {
  name: string;
  sets: number;
  reps: string;
  target: string;
  timePerSet: number; // 每组时间（分钟）
  restTime: number;  // 休息时间（秒）
  note: string;
}

interface WorkoutDay {
  day: string;
  focus: string;
  targetMuscles: string;
  note: string;
  exercises: Exercise[];
}

export const workoutSchedule: WorkoutDay[] = [
  {
    day: "周一",
    focus: "胸肌&三头肌",
    targetMuscles: "胸部、三头肌",
    note: "强度训练，集中训练胸部",
    exercises: [
      {
        name: "1. 卧推（哑铃）",
        target: "胸部",
        sets: 4,
        reps: "8–12次",
        timePerSet: 2,
        restTime: 90,
        note: "哑铃卧推，注意控制下降速度"
      },
      {
        name: "2. 上斜哑铃卧推",
        target: "上胸部",
        sets: 4,
        reps: "8–12次",
        timePerSet: 2,
        restTime: 90,
        note: "锻炼上胸肌"
      },
      {
        name: "3. 哑铃飞鸟",
        target: "胸部",
        sets: 4,
        reps: "12–15次",
        timePerSet: 2,
        restTime: 90,
        note: "刺激胸肌的外侧和中部"
      },
      {
        name: "4. 俯卧撑",
        target: "胸部",
        sets: 3,
        reps: "15–20次",
        timePerSet: 1,
        restTime: 60,
        note: "作为辅助练习"
      }
    ]
  },
  {
    day: "周二",
    focus: "腹肌&腿部",
    targetMuscles: "腹肌、腿部",
    note: "训练腹肌和基础腿部动作",
    exercises: [
      {
        name: "1. 卷腹",
        sets: 4,
        reps: "15–20次",
        target: "腹肌",
        timePerSet: 1,
        restTime: 60,
        note: "增加难度可加负重"
      },
      {
        name: "2. 悬垂举腿",
        sets: 4,
        reps: "12–15次",
        target: "腹肌",
        timePerSet: 1,
        restTime: 60,
        note: "训练腹部下腹"
      },
      {
        name: "3. 深蹲（哑铃）",
        sets: 4,
        reps: "12–15次",
        target: "腿部",
        timePerSet: 2,
        restTime: 90,
        note: "哑铃深蹲，锻炼大腿和臀部"
      },
      {
        name: "4. 侧卧腿举",
        sets: 3,
        reps: "15–20次",
        target: "腿部",
        timePerSet: 1,
        restTime: 60,
        note: "锻炼大腿外侧和臀部肌肉"
      }
    ]
  },
  {
    day: "周三",
    focus: "休息日或轻量有氧",
    targetMuscles: "",
    note: "活动恢复，增加体能",
    exercises: []
  },
  {
    day: "周四",
    focus: "胸肌&二头肌",
    targetMuscles: "胸部、二头肌",
    note: "加强胸部训练，并兼顾二头肌",
    exercises: [
      {
        name: "1. 卧推（哑铃）",
        sets: 4,
        reps: "8–12次",
        target: "胸部",
        timePerSet: 2,
        restTime: 90,
        note: "加强胸部的厚度与力量"
      },
      {
        name: "2. 平板哑铃飞鸟",
        sets: 4,
        reps: "12–15次",
        target: "胸部",
        timePerSet: 2,
        restTime: 90,
        note: "增加胸部宽度"
      },
      {
        name: "3. 哑铃弯举",
        sets: 4,
        reps: "10–12次",
        target: "二头肌",
        timePerSet: 1,
        restTime: 60,
        note: "强化二头肌的力量和形态"
      },
      {
        name: "4. 哑铃集中弯举",
        sets: 3,
        reps: "12–15次",
        target: "二头肌",
        timePerSet: 1,
        restTime: 60,
        note: "练习二头肌的细节"
      }
    ]
  },
  {
    day: "周五",
    focus: "腹肌&腿部",
    targetMuscles: "腹肌、腿部",
    note: "腹部深度训练，腿部训练基础动作",
    exercises: [
      {
        name: "1. 卷腹（加负重）",
        sets: 4,
        reps: "15–20次",
        target: "腹肌",
        timePerSet: 1,
        restTime: 60,
        note: "练腹部的厚度与力量"
      },
      {
        name: "2. 俄罗斯转体",
        sets: 4,
        reps: "20次（每边）",
        target: "腹肌",
        timePerSet: 1,
        restTime: 60,
        note: "加强腹部的旋转训练"
      },
      {
        name: "3. 哑铃单腿硬拉",
        sets: 4,
        reps: "10–12次",
        target: "腿部",
        timePerSet: 2,
        restTime: 90,
        note: "训练大腿后侧和臀部肌肉"
      },
      {
        name: "4. 俯身腿弯举",
        sets: 4,
        reps: "12–15次",
        target: "腿部",
        timePerSet: 1,
        restTime: 60,
        note: "锻炼大腿内侧"
      }
    ]
  },
  {
    day: "周六",
    focus: "肩部&三头肌",
    targetMuscles: "肩部、三头肌",
    note: "增强肩部和三头肌的训练",
    exercises: [
      {
        name: "1. 哑铃推举",
        sets: 4,
        reps: "8–12次",
        target: "肩部",
        timePerSet: 2,
        restTime: 90,
        note: "强化肩部上部"
      },
      {
        name: "2. 哑铃侧平举",
        sets: 4,
        reps: "12–15次",
        target: "肩部",
        timePerSet: 1,
        restTime: 60,
        note: "增加肩部宽度"
      },
      {
        name: "3. 绳索下压",
        sets: 4,
        reps: "12–15次",
        target: "三头肌",
        timePerSet: 1,
        restTime: 60,
        note: "强化三头肌的细节"
      },
      {
        name: "4. 背后臂屈伸",
        sets: 4,
        reps: "8–12次",
        target: "三头肌",
        timePerSet: 1,
        restTime: 60,
        note: "完善三头肌的力量与线条"
      }
    ]
  },
  {
    day: "周日",
    focus: "休息日或有氧",
    targetMuscles: "",
    note: "活动恢复，保持低强度运动",
    exercises: []
  }
];