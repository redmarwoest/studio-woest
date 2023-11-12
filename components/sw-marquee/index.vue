<template>
  <div class="marquee scroll">
    <ul class="marquee__content">
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
    </ul>
    <!-- Mirrors the content above -->
    <ul class="marquee__content">
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
      <li>
        <h5>AVAILABILITY FROM THE 1ST OF FEBRUARY</h5>
      </li>
      <li><img src="/icons/sw-bolt-small.svg" alt="" /></li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss">
.marquee {
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  height: 46px;
  border-bottom: 1px solid #fefce4;
}

li {
  display: flex;

  @media (max-width: 784px) {
    &:nth-child(-n + 4) {
      display: none;
    }
  }
}

.marquee__content {
  animation: scroll 30s linear infinite;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: var(--gap);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
