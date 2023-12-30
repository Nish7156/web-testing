import { AlertIcon } from "@/components/icons/AlertIcon";
import { BellIcon } from "@/components/icons/BellIcon";
import { CashIcon } from "@/components/icons/CashIcon";
import { CircleWithStar } from "@/components/icons/CircleWithStart";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { DownIcon } from "@/components/icons/DownIcon";
import { EditIconFill } from "@/components/icons/EditFillIcon";
import { EgalIcon } from "@/components/icons/EgalIcon";
import { EstablishIcon } from "@/components/icons/EstablishIcon";
import { HolderIcon } from "@/components/icons/HolderIcon";
import { MarketIcon } from "@/components/icons/MarketIcon";
import { NewTagIcon } from "@/components/icons/NewTagIcon";
import { PeoplesIcon } from "@/components/icons/PeoplesIcon";
import { PersonWithCashIcon } from "@/components/icons/PersonWithCashIcon";
import { ProfitIcon } from "@/components/icons/ProfitIcon";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { SpickerIcon } from "@/components/icons/SpickerIcon";
import { StagnationIcon } from "@/components/icons/StagnationIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { TokenActivityIcon } from "@/components/icons/TokenActivityIcon";
import { TradeBarIcon } from "@/components/icons/TradeBard";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { UnicornIcon } from "@/components/icons/UnicornIcon";
import { VerifyIcon } from "@/components/icons/VerifyIcon";
import { VolumeIcon } from "@/components/icons/VolumeIcon";
import { WhaleIcon } from "@/components/icons/WhaleIcon";
import dropdown from "./dropdown";
import { ActionTypes } from "@/types/airdrop";
import { ShareSquareIcon } from "@/components/icons/ShareSquareIcon";

export const AiFooterLinks = [
  { href: "/ai-assistant/configurations", label: "Configurations" },
  { href: "/ai-assistant/history", label: "History" },
  // Add more links as needed
];
export const AlertFooterLinks = [
  { href: "/alert/trade", label: "Trade" },
  { href: "/alert/scanner", label: "Screener" },
  // Add more links as needed
];

export const AirDropFooterLinks = [
  { href: "/airdrop", label: "Airdrop" },
  { href: "/airdrop/account", label: "Account" },
  // Add more links as needed
];

export const OPEN_ORDER_ACTIONS = [
  {
    action: "bell",
    icon: <BellIcon />,
  },
  {
    action: "edit",
    icon: <EditIconFill />,
  },
  {
    action: "delete",
    icon: <DeleteIcon />,
  },
];

export const OPEN_ORDER_ACTIONS_OLD = [
  {
    action: "edit",
    icon: <EditIconFill />,
  },
  {
    action: "delete",
    icon: <DeleteIcon />,
  },
];
export const HISTORY_ACTIONS = [
  {
    action: "unicorn",
    icon: <UnicornIcon />,
  },
  {
    action: "star",
    icon: <CircleWithStar />,
  },
];

export const CLOSE_ORDER_ACTIONS = [
  {
    action: "egal",
    icon: <EgalIcon />,
  },
  {
    action: "unicorn",
    icon: <UnicornIcon />,
  },
  {
    action: "star",
    icon: <CircleWithStar />,
  },
];

export const TOKEN_PROMPT = [
  {
    title: "Price Fluctuations",
    desc: "Alert me when [Token]’s price increases by more than 10% in 24 hours.",
    icon: <TradeBarIcon />,
  },
  {
    title: "Volume Surges",
    desc: "Notify when any token's trading volume exceeds $1M within the last hour.",
    icon: <VolumeIcon />,
  },
  {
    title: "Market Cap Milestones:",
    desc: "Set an alert for when a token's market cap crosses the $100M threshold.",
    icon: <MarketIcon />,
  },
  {
    title: "New Tokens:",
    desc: "Alert for tokens that are less than 7 days old.",
    icon: <NewTagIcon />,
  },
  {
    title: "Established Tokens",
    desc: "Notify when a token older than 1 year has a price jump.",
    icon: <EstablishIcon />,
  },
  {
    title: "Liquidity Changes",
    desc: "Set an alert for when a token's liquidity drops below $500K.",
    icon: <CashIcon />,
  },
  {
    title: "High Transaction Tokens",
    desc: "Alert me about tokens with more than 5000 transactions in a day.",
    icon: <EstablishIcon />,
  },
  {
    title: "Token Activity",
    desc: "Notify when a token has had a consistent increase in activity for the past week.",
    icon: <TokenActivityIcon />,
  },
  {
    title: "Token Stagnation",
    desc: "Alert for tokens with no significant trading activity in the past month.",
    icon: <StagnationIcon />,
  },
  {
    title: "Diverse Holding",
    desc: "Notify when a token has more than 1000 holders.",
    icon: <PeoplesIcon />,
  },
  {
    title: "Contract Verification",
    desc: "Notify when an unverified contract gets verified on the blockchain.",
    icon: <VerifyIcon />,
  },
  {
    title: "Honeypot Detection",
    desc: "Alert if a token is potentially a honeypot.",
    icon: <AlertIcon />,
  },
  {
    title: "Tax Changes",
    desc: "Alert if the buy or sell tax for [Token] is modified by more than 2%.",
    icon: <VerifyIcon />,
  },
  {
    title: "Influencer Involvement",
    desc: "Set an alert for when the number of influencers involved with a token exceeds 10.",
    icon: <SpickerIcon />,
  },
  {
    title: "Social Buzz ",
    desc: "Alert me when a token has been mentioned over 1000 times on social media in the past 24 hours.",
    icon: <SocialIcon />,
  },
];

export const HOLDER_PROMPT = [
  {
    title: "Top Holder Activity",
    desc: "Alert for tokens where top 20 holders have a win rate above 75%.",
    icon: <HolderIcon />,
  },
  {
    title: "Profitable Holder Actions",
    desc: "Alert when top 50 holders’ realized PNL in the last 30 days exceeds $100,000.",
    icon: <ProfitIcon />,
  },
  {
    title: "Holder Net Worth",
    desc: "Notify when a new holder with a net worth over $1M starts holding [Token].",
    icon: <PersonWithCashIcon />,
  },
  {
    title: "Whale Movement",
    desc: "Notify when a new holder with a net worth over $1M starts holding [Token].",
    icon: <WhaleIcon />,
  },
];

export const INFLUENCERS_PROMPT = [
  {
    title: "Top Holder Activity",
    desc: "Alert for tokens where top 20 holders have a win rate above 75%.",
    icon: <HolderIcon />,
  },
  {
    title: "Profitable Holder Actions",
    desc: "Alert when top 50 holders’ realized PNL in the last 30 days exceeds $100,000.",
    icon: <TradeBarIcon />,
  },
  {
    title: "Holder Net Worth",
    desc: "Notify when a new holder with a net worth over $1M starts holding [Token].",
    icon: <MarketIcon />,
  },
  {
    title: "Whale Movement",
    desc: "Set an alert for when there's a large transaction (over $500K) from a top holder.",
    icon: <MarketIcon />,
  },
];

export const TOKEN_OPTIONS = [
  { label: "TICKR", value: "$1K" },
  { label: "TICKR", value: "$12K" },
  { label: "TICKR", value: "$123K" },
  { label: "TICKR", value: "$1234K" },
];
export const DPI_OPTIONS = [
  {
    label: "is on -10% Dip",
    value: "-0.10",
  },
  {
    label: "Pumps by 1.5x",
    value: "1.5",
  },
  {
    label: "Pumps by 2x",
    value: "2",
  },
  {
    label: "Custom",
    value: "custom",
  },
];

export const First20InputForm = [
  {
    label: "Age",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "Winrate",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "Networth",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "Realized P&L (30 Days) ",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
];

export const First50InputForm = [
  {
    label: "Age",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "Liquidity",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "FDV",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
];
export const SocialMediaFields = [
  {
    label: "Total Mention",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
  {
    label: "Influencer Mention",
    selectPlaceholder: "Less than",
    inputPlaceholder: "Enter",
  },
];
export const FilterByOPTIONS = [
  {
    label: "Less Than",
    value: "lte",
  },
  {
    label: "Greater Than",
    value: "gte",
  },
  {
    label: "Equal to",
    value: "",
  },
];
export const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    fontSize: "14px",
    backgroundColor: "#0f0f13",
    border: "none",
    color: "white",
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontSize: "14px",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: false ? "red" : "white",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
};
export const dropdownMap = [
  {
    label: "Age",
    value: null,
    options: dropdown.AGE,
    optionValue: dropdown.AGE[0],
    inputPlaceholder: "Enter Age",
  },
  {
    label: "LIQUIDITY",
    value: null,
    options: dropdown.LIQUIDITY,
    optionValue: dropdown.LIQUIDITY[0],
    inputPlaceholder: "Enter Liquidity",
  },
  {
    label: "FDV",
    value: null,
    options: dropdown.FDV,
    optionValue: dropdown.FDV[0],
    inputPlaceholder: "Enter FDV",
  },
  {
    label: "Transaction",
    value: null,
    options: dropdown.TXN,
    optionValue: dropdown.TXN[0],
    inputPlaceholder: "Enter Transaction",
  },
  {
    label: "Volume",
    value: null,
    options: dropdown.VOL,
    optionValue: dropdown.VOL[0],
    inputPlaceholder: "Enter Volume",
  },
  {
    label: "Holder",
    value: null,
    options: dropdown.HOLDER,
    optionValue: dropdown.HOLDER[0],
    inputPlaceholder: "Enter Holders",
  },
];

export const eventOptions = [
  {
    label: "BUY",
    value: "buy",
  },
  {
    label: "SELL",
    value: "sell",
  },
];

export const AirDropData = [
  {
    title: "Signup with Twitter",
    subText: null,
    action: ActionTypes.LOGIN_TWITTER,
    tickets: "150 TICKER",
    icon: <TwitterIcon />,
    status: "Start",
  },
  {
    title: "Follow Our Twitter Account",
    subText: null,
    action: ActionTypes.FOLLOW_TWITTER,
    tickets: "150 TICKER",
    icon: <TwitterIcon />,
    status: "Start",
    link: "https://twitter.com/TickrTech",
  },
  {
    title: "Connect Telegram",
    subText: null,
    action: ActionTypes.LOGIN_TELEGRAM,
    tickets: "150 TICKER",
    icon: <TelegramIcon />,
    status: "Start",
  },
  {
    title: "Join Our Telegram Account",
    subText: null,
    action: ActionTypes.JOIN_TELEGRAM,
    tickets: "150 TICKER",
    icon: <TelegramIcon />,
    status: "Start",
    link: "https://t.me/TickrOfficial",
  },
  {
    title: "Refer a friend",
    subText: null,
    action: ActionTypes.REFER_FRIEND,
    tickets: "150 TICKER",
    icon: <ShareSquareIcon />,
    status: "Start",
  },
  {
    title: "Download Tickr.ai Extension",
    subText: null,
    action: ActionTypes.DOWNLOAD,
    tickets: "150 TICKER",
    icon: <DownIcon />,
    status: "Start",
  },
  // {
  //   title: "Set Alerts in Our Tickr.ai Alert Terminal",
  //   subText: "Stay ahead of market movements by setting up custom alerts.",
  //   action: ActionTypes.ALERT_TERMINAL,
  //   tickets: "150 TICKER",
  //   icon: null,
  //   status: "Start",
  // },
  // {
  //   title: "Execute at least 1 Trade via Our Extension",
  //   subText:
  //     "Make a trade using our extension to experience streamlined trading.",
  //   action: ActionTypes.EXTENSION,
  //   tickets: "150 TICKER",
  //   icon: <TwitterIcon />,
  //   status: "Start",
  // },
  // {
  //   title: "Join Our Discord ",
  //   subText:
  //     "Become part of our Discord community to discuss strategies and share insights.",
  //   action: ActionTypes.LOGIN_DISCORD,
  //   tickets: "150 TICKER",
  //   icon: <DiscordIcon />,
  //   status: "Start",
  // },
  // {
  //   title: "Register for Whitelist",
  //   subText:
  //     "Gain early access to exclusive trading features by joining our whitelist.",
  //   action: ActionTypes.WHITE_LIST,
  //   tickets: "150 TICKER",
  //   icon: null,
  //   status: "Start",
  // },
  // {
  //   title: "Interact with Our AI Assistant",
  //   subText:
  //     "Get personalized trading assistance and insights from our intelligent AI assistant.",
  //   action: ActionTypes.AI_ASSISTANT,
  //   tickets: "150 TICKER",
  //   icon: null,
  //   status: "Start",
  // },
];
