import React from 'react';
import styled from '@emotion/styled';

import Avatar from 'app/components/avatar';
import space from 'app/styles/space';
import overflowEllipsis from 'app/styles/overflowEllipsis';
import {Team, Member, User, Organization, AvatarProject} from 'app/types';

type Props = {
  displayName: React.ReactNode;
  user?: User;
  member?: Member;
  team?: Team;
  organization?: Organization;
  project?: AvatarProject;
  description?: React.ReactNode;
  avatarProps?: Record<string, any>;
  avatarSize?: number;
  hideAvatar?: boolean;
  hideName?: boolean; // Hides the main display name
  className?: string;
};

const BaseBadge = React.memo(
  ({
    hideName = false,
    hideAvatar = false,
    displayName,
    description,
    team,
    organization,
    project,
    member,
    user,
    avatarProps = {},
    avatarSize = 24,
    className,
  }: Props) => (
    <Wrapper className={className}>
      {!hideAvatar && (
        <StyledAvatar
          {...avatarProps}
          size={avatarSize}
          hideName={hideName}
          team={team}
          organization={organization}
          project={project}
          member={member}
          user={user}
        />
      )}

      {(!hideName || !!description) && (
        <DisplayNameAndDescription>
          {!hideName && (
            <DisplayName data-test-id="badge-display-name">{displayName}</DisplayName>
          )}
          {!!description && <Description>{description}</Description>}
        </DisplayNameAndDescription>
      )}
    </Wrapper>
  )
);

export default BaseBadge;

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)<{hideName: boolean}>`
  margin-right: ${p => (p.hideName ? 0 : space(1))};
  flex-shrink: 0;
`;

const DisplayNameAndDescription = styled('div')`
  display: flex;
  flex-direction: column;
  line-height: 1;
  overflow: hidden;
`;

const DisplayName = styled('span')`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

const Description = styled('div')`
  font-size: 0.875em;
  margin-top: ${space(0.25)};
  color: ${p => p.theme.gray500};
  line-height: 14px;
  ${overflowEllipsis};
`;
