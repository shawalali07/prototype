import { NftSection } from "../components/shared/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/shared/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/shared/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/shared/marketPlace/MarketPlaceSubmenu";

export function MarketPlace() {
  return (
    <div className='bg-primary text-white py-5 px-7'>
      <MarketPlaceHeader />
      <MarketPlaceSubmenu />
      <MarketPlaceFilters />
      <NftSection />
    </div>
  );
}
