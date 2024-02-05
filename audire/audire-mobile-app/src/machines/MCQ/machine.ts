import { assertEvent, assign, createMachine } from 'xstate';
import { MCQMachineContext } from './types/context';
import {
  setPrevQuestion,
  setNextQuestion,
  setCurrentQuestion,
  setMarkAnswer,
  setMarkToRevisit,
  setStartExam,
  calculateMarks,
  markQuestionVisited,
} from './actions';
import { MCQMachineEvents } from './events';
import { hasNextQuestion, hasPrevQuestion } from './guards';
export const MCQMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QFkDCBFAdAQwC67ADsIBLQqAWgEcBXOXEge0IGIBlAVQCFkBJAFQD6AUQAaAQWQBtAAwBdRKAAOjWCQbNFIAB6IA7ADYZmAMwyALHpkBWAJx7rD2wYA0IAJ6IzJzDIAcJia2AEwAjI5+1pbWAL4xbmhYeATEZJS09EysyOIASgDSguIAcmwA6sK5sgpIICpqGoRaugiBxn62MgaONn6htvZunq3mxv6BBuZ+3SbmwYFxCRg4+ESk5NR0sI0sxWJC6BzCbPy8APLF1Vr16lnN+kamFlZ2Dk6uHoihwba+Mv+hPwyNoGPzBYKLECJFYpdbpLY7AAKuWEADVBIdjqcLldajdGvdWsFrL5bCY9IZgsC-GDQh9huZzCTrAETKEKY4QqFIdDkms0ptMswWAApDjIRGCfhnDFHE7nS7ya6qW6aWotH7mP4A4IBSZmWxDL403yskKTGwmAzfHnLPmpDYZbZZFg5ApSmUo1G8NgCXHKFUE9UPYxmSw2eyOOz0xDzLXWf4yH4BIGTW1YEgQAA2YHY-DyQjEkn9dUDd2DCE12pk3z15gNRoQoXCmAMbb0TOsRitej8enTmAAttgAE4AawF2EIsAA7mARyxtNs8GAcAAzAgjgAUCZkAEpXcth+PJ9O5yOS-jy6ANbYtYma7qrfWZIbPpWQpgWbNwhEO7ZYniKFlizRhsDhChCDAbRcEFZ1hSXXAV3XTcd3+A9oVA8CBSgmC4MaS8yzVG9EDBYJMBpXVwWBAxAlCRs+kwcwBgGMwazJWwbSAzCwIgpQRzAAA3fCXUQ5DsA3ec0P3Q8sCwviBOEp0CKVPEiKaCsqwfWtnwbd8gj8U06L0exmKsAx+245YACsaEHJQBVwRgRIQ5cCBQqTdwwmy7IcjYnJcwhCIaa8dFjO9qx0-VX0beZDO-Ew+iTLtWUspYsGPCd-OcxSSAaRc3NXCTUK82Sh1HLLKAC3KGmC1UNJIhAyIosEyJoujG0BAxMBY+wAJZBxrXMOIgMIRgIDgLREmVELiLChAKBjBbuofVbtOGqyklWB14SFBrS1m-aWmsMwepO8JmKiUYANijojKCIxNT0eYBwgZgwBm+rCQAwyuRpPxzAMEJ5no-TgS-M0wgiKIHAHTMc0+oNGpMpjyQTPRQmY+wf0bT82wshNQWJAxghMgdMtPWd50R0KWjbJi-usQETGCbogcbbxW3bLpnFGCk2wHeScOg2DlNCq85paH6erCf7AeBtlcfIhLInJAYwRMQXeIFfihMCmnJcQR5DC7KlCYBmtrEba7MDpNtIlCCwAiZgdbPsxznLFuaJaOxA5k62xDLt57KMCKlWfJiqPYoGr1AN32EGlv6aXl8FFfffpDPGK0TGsKk9CCDsRpiIA */
    id: 'MCQ',
    initial: 'idle',
    types: {
      context: {} as MCQMachineContext,
      events: {} as MCQMachineEvents,
    },
    context: {} as MCQMachineContext,
    states: {
      'attending-question': {
        entry: ['calculateMarks', 'markQuestionVisited'],
        on: {
          SUBMIT_EXAM: {
            actions: ['calculateMarks'],
            target: 'done',
          },
          MARK_ANSWER: 'marking-answer',
          NEXT_QUESTION: {
            target: 'loading-next-question',
            guard: 'hasNextQuestion',
          },
          PREV_QUESTION: {
            target: 'loading-prev-question',
            guard: 'hasPrevQuestion',
          },
          JUMP_TO_QUESTION: 'jumping-to-question',
          MARK_TO_REVISIT: 'marking-to-revisit',
        },
      },

      done: {},

      idle: {
        on: {
          START_EXAM: {
            target: 'attending-question',
            actions: ['setStartExam'],
          },
        },
      },

      'marking-answer': {
        after: {
          '500': 'attending-question',
        },
        entry: ['setMarkAnswer'],
      },

      'loading-next-question': {
        after: {
          '500': 'attending-question',
        },
        entry: ['setNextQuestion'],
      },

      'loading-prev-question': {
        after: {
          '500': 'attending-question',
        },
        entry: ['setPrevQuestion'],
      },

      'jumping-to-question': {
        after: {
          '500': 'attending-question',
        },
        entry: ['setCurrentQuestion'],
      },

      'marking-to-revisit': {
        after: {
          '500': 'attending-question',
        },
        entry: ['setMarkToRevisit'],
      },
    },
  },
  {
    actions: {
      setCurrentQuestion: assign(({ context, event }) => {
        assertEvent(event, 'JUMP_TO_QUESTION');
        return setCurrentQuestion(context, event);
      }),
      setMarkAnswer: assign(({ context, event }) => {
        assertEvent(event, 'MARK_ANSWER');
        return setMarkAnswer(context, event);
      }),
      setNextQuestion: assign(({ context, event }) => {
        assertEvent(event, 'NEXT_QUESTION');
        return setNextQuestion(context, event);
      }),
      setPrevQuestion: assign(({ context, event }) => {
        assertEvent(event, 'PREV_QUESTION');
        return setPrevQuestion(context, event);
      }),
      setMarkToRevisit: assign(({ context, event }) => {
        assertEvent(event, 'MARK_TO_REVISIT');
        return setMarkToRevisit(context, event);
      }),
      setStartExam: assign(({ context, event }) => {
        assertEvent(event, 'START_EXAM');
        return setStartExam(context, event);
      }),
      calculateMarks: assign(({ context }) => {
        return calculateMarks(context);
      }),
      markQuestionVisited: assign(({ context }) => {
        return markQuestionVisited(context);
      }),
    },
    guards: {
      hasNextQuestion,
      hasPrevQuestion,
    },
  }
);
