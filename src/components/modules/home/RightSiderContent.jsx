import React from "react";
import SearchInputUI from "../../ui/SearchInputUI";
import CardUI from "../../ui/CardUI";
import ListItemUI from "../../ui/ListItemUI";
import ProfileItemUI from "../../ui/ProfileItemUI";
import { profilesList, whatsHappening } from "../../../data/users-data";

const RightSiderContent = () => {
  const searchUsersUrl = "https://dummyjson.com/user/search";
  const { mostTrending, other } = whatsHappening;
  return (
    <div className="flex flex-col gap-2  h-full overflow-y-auto scrollbar-hide">
      <SearchInputUI
        url={searchUsersUrl}
        renderItem={(user) => (
          <ProfileItemUI user={user} showFollowBtn={false} />
        )}
      />
      <CardUI heading="What's happening">
        {mostTrending?.map((item) => (
          <ListItemUI key={item.id} item={item} />
        ))}
        {other?.map((item) => (
          <ListItemUI key={item.id} item={item} />
        ))}
      </CardUI>
      <CardUI heading="Who to follow">
        {profilesList?.map((item) => (
          <ProfileItemUI key={item.id} item={item} showFollowBtn={true} />
        ))}
      </CardUI>
    </div>
  );
};

export default RightSiderContent;
