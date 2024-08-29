import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import UText from "../UText.vue"
import type { ITextConfig, ITextProps } from "../support"

describe("u-text", () => {
  it("u-text render test", async () => {
    const CONFIG_WITHOUT_WEIGHT: ITextConfig = {
      size: 12,
    }
    const CONFIG: ITextConfig = {
      size: 12,
      weight: "b",
    }
    const wrapper1 = mount(UText, { props: { tag: "h1", config: CONFIG } as unknown as ITextProps })
    const wrapper2 = mount(UText, {
      props: { tag: "p", config: CONFIG_WITHOUT_WEIGHT } as unknown as ITextProps,
    })

    expect(wrapper1.classes()).toContain("text-12-b")
    expect(wrapper1.vm.tag).toBe("h1")
    expect(wrapper2.classes()).toContain("text-12")
    expect(wrapper2.vm.tag).toBe("p")
  })
})
