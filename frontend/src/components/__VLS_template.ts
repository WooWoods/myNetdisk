import DialogVue from './DialogVue.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, tableData, is_login, is_anonymouse } from './TableVue.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElTable', typeof __VLS_localComponents, "ElTable", "elTable", "el-table"> &
__VLS_WithComponent<'ElTableColumn', typeof __VLS_localComponents, "ElTableColumn", "elTableColumn", "el-table-column"> &
__VLS_WithComponent<'ElCheckbox', typeof __VLS_localComponents, "ElCheckbox", "elCheckbox", "el-checkbox"> &
__VLS_WithComponent<'ElIcon', typeof __VLS_localComponents, "ElIcon", "elIcon", "el-icon"> &
__VLS_WithComponent<'Download', typeof __VLS_localComponents, "Download", "Download", "Download"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button"> &
__VLS_WithComponent<'Share', typeof __VLS_localComponents, "Share", "Share", "Share"> &
__VLS_WithComponent<'DialogVue', typeof __VLS_localComponents, "DialogVue", "DialogVue", "DialogVue">;
__VLS_components.ElTable; __VLS_components.ElTable; __VLS_components.elTable; __VLS_components.elTable; __VLS_components["el-table"]; __VLS_components["el-table"];
// @ts-ignore
[ElTable, ElTable,];
__VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.ElTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components.elTableColumn; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"]; __VLS_components["el-table-column"];
// @ts-ignore
[ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn, ElTableColumn,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.ElCheckbox; __VLS_components.elCheckbox; __VLS_components["el-checkbox"];
// @ts-ignore
[ElCheckbox,];
__VLS_components.ElIcon; __VLS_components.ElIcon; __VLS_components.ElIcon; __VLS_components.ElIcon; __VLS_components.elIcon; __VLS_components.elIcon; __VLS_components.elIcon; __VLS_components.elIcon; __VLS_components["el-icon"]; __VLS_components["el-icon"]; __VLS_components["el-icon"]; __VLS_components["el-icon"];
// @ts-ignore
[ElIcon, ElIcon, ElIcon, ElIcon,];
__VLS_components.Download;
// @ts-ignore
[Download,];
__VLS_components.ElButton; __VLS_components.elButton; __VLS_components["el-button"];
// @ts-ignore
[ElButton,];
__VLS_components.Share;
// @ts-ignore
[Share,];
__VLS_components.DialogVue;
// @ts-ignore
[DialogVue,];
{
let __VLS_0!: 'ElTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTable : 'elTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTable : 'el-table' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTable'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, data: ((__VLS_ctx.tableData)), height: ("1000"), style: ({}), }));
({} as { ElTable: typeof __VLS_0; }).ElTable;
({} as { ElTable: typeof __VLS_0; }).ElTable;
const __VLS_2 = __VLS_1({ ...{}, data: ((__VLS_ctx.tableData)), height: ("1000"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, data: ((__VLS_ctx.tableData)), height: ("1000"), style: ({}), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, width: ("180"), }));
({} as { ElTableColumn: typeof __VLS_5; }).ElTableColumn;
({} as { ElTableColumn: typeof __VLS_5; }).ElTableColumn;
const __VLS_7 = __VLS_6({ ...{}, width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, width: ("180"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
let __VLS_15!: 'ElCheckbox' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElCheckbox : 'elCheckbox' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elCheckbox : 'el-checkbox' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-checkbox'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElCheckbox'];
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, modelValue: ((__VLS_ctx.checked1)), size: ("large"), }));
({} as { ElCheckbox: typeof __VLS_15; }).ElCheckbox;
const __VLS_17 = __VLS_16({ ...{}, modelValue: ((__VLS_ctx.checked1)), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.checked1)), size: ("large"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
let __VLS_20!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), }));
({} as { ElTableColumn: typeof __VLS_20; }).ElTableColumn;
const __VLS_22 = __VLS_21({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, prop: ("date"), label: ("Date"), width: ("180"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
let __VLS_25!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, prop: ("name"), label: ("Name"), width: ("480"), }));
({} as { ElTableColumn: typeof __VLS_25; }).ElTableColumn;
const __VLS_27 = __VLS_26({ ...{}, prop: ("name"), label: ("Name"), width: ("480"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, prop: ("name"), label: ("Name"), width: ("480"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
let __VLS_30!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, prop: ("address"), label: ("Address"), }));
({} as { ElTableColumn: typeof __VLS_30; }).ElTableColumn;
const __VLS_32 = __VLS_31({ ...{}, prop: ("address"), label: ("Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, prop: ("address"), label: ("Address"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
{
let __VLS_35!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, prop: ("size"), label: ("Size"), width: ("120"), }));
({} as { ElTableColumn: typeof __VLS_35; }).ElTableColumn;
const __VLS_37 = __VLS_36({ ...{}, prop: ("size"), label: ("Size"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, prop: ("size"), label: ("Size"), width: ("120"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
let __VLS_40!: 'ElTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElTableColumn : 'elTableColumn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elTableColumn : 'el-table-column' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-table-column'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElTableColumn'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, width: ("100"), }));
({} as { ElTableColumn: typeof __VLS_40; }).ElTableColumn;
({} as { ElTableColumn: typeof __VLS_40; }).ElTableColumn;
const __VLS_42 = __VLS_41({ ...{}, width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, width: ("100"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
if (__VLS_ctx.is_login) {
{
let __VLS_50!: 'ElIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElIcon : 'elIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elIcon : 'el-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElIcon'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, }));
({} as { ElIcon: typeof __VLS_50; }).ElIcon;
({} as { ElIcon: typeof __VLS_50; }).ElIcon;
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
let __VLS_55!: 'Download' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Download : (typeof __VLS_resolvedLocalAndGlobalComponents)['Download'];
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, }));
({} as { Download: typeof __VLS_55; }).Download;
const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
(__VLS_53.slots!).default;
}
// @ts-ignore
[tableData, tableData, tableData, checked1, checked1, checked1, is_login,];
}
else if (__VLS_ctx.is_anonymouse) {
{
let __VLS_60!: 'ElButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElButton : 'elButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elButton : 'el-button' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-button'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElButton'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, type: ("primary"), icon: ((__VLS_ctx.Share)), }));
({} as { ElButton: typeof __VLS_60; }).ElButton;
const __VLS_62 = __VLS_61({ ...{}, type: ("primary"), icon: ((__VLS_ctx.Share)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, type: ("primary"), icon: ((__VLS_ctx.Share)), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
}
// @ts-ignore
[is_anonymouse, Share, Share, Share,];
}
else {
{
let __VLS_65!: 'ElIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ElIcon : 'elIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.elIcon : 'el-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['el-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElIcon'];
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{}, }));
({} as { ElIcon: typeof __VLS_65; }).ElIcon;
({} as { ElIcon: typeof __VLS_65; }).ElIcon;
const __VLS_67 = __VLS_66({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
let __VLS_70!: 'Share' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Share : (typeof __VLS_resolvedLocalAndGlobalComponents)['Share'];
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, }));
({} as { Share: typeof __VLS_70; }).Share;
const __VLS_72 = __VLS_71({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
}
(__VLS_68.slots!).default;
}
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
(__VLS_3.slots!).default;
}
{
let __VLS_75!: 'DialogVue' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DialogVue : (typeof __VLS_resolvedLocalAndGlobalComponents)['DialogVue'];
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, }));
({} as { DialogVue: typeof __VLS_75; }).DialogVue;
const __VLS_77 = __VLS_76({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
